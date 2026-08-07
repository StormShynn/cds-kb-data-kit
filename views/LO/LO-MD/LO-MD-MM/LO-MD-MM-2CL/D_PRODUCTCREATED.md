---
name: D_PRODUCTCREATED
description: D Productcreated
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# D_PRODUCTCREATED

**D Productcreated**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductType` |  | |  | `producttype` |
| `ProductCategory` |  | |  | `prodcategory` |

## Source Code

```abap
@EndUserText.label: 'Product Created'
@ObjectModel.sapObjectNodeType.name: 'Product'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProductCreated 
{
    ProductType                    : producttype  ;  
    ProductCategory                : prodcategory ;
     
}
```
