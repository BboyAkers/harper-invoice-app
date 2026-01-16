import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

interface MenuItem {
	to?: string;
	onClick?: () => void;
	icon: ReactNode;
	text: string;
	target?: string;
	textBreakpoint?: string;
}

const activeLinkProps = {
	className: "text-grey",
};

export function Navbar({ menuItems }: { menuItems: Array<MenuItem> }) {

	return (
		<div>
			<div className="flex items-center justify-between py-4 px-10 bg-blue text-white">
				<div>
					<Link to="/">
						<img
							alt="Harper Dog Logo"
							src="/src/assets/HDBDogOnly.svg"
							className="w-auto h-10 mx-auto"
						/>
					</Link>
				</div>
				<NavigationMenu>
					<NavigationMenuList>
						{menuItems.map((item) => (
							<NavigationMenuItem key={item.text}>
								<NavigationMenuLink asChild>
									<Link to={item.to || "#"} className="flex-row items-center text-base" activeProps={activeLinkProps}>
										{item.icon}
										<span>{item.text}</span>
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
    
	);
}
