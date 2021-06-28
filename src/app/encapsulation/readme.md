# View Encapuslation
### view Encapsulation is used to share the CSS properties from parent to child pr at global level.

## Three Types of View Encapsulation
- Emulated
- Shadow
- None
### Emulated

** By Default angular is configured with Emulated  and in this along  with the propertiees metioned in the respective css, By deafult angular will add some classes _nghost_  and CSS calsses will be indentified with .class[Attribute]. so that these properties will access in its component scope only not traverse to child components too**

#Shadow
** When we made viewEncapuslastion as shadow, then the entire parent and child css reflects as a shadom styling at template level **

#None
** If view Encapuslation is None, then styling will be adhere in the head level and can be accessed all the elements **.