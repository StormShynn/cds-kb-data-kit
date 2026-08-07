---
name: I_ASSIGNEDORDERANDCATEGORY
description: All Order IDs and Categories for ETO
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERANDCATEGORY')/$value
semantic_en: All Order IDs and Categories for ETO
semantic_vi: All Order IDs and Categories for ETO — CDS view giao diện dựa trên All Order IDs and Categories for ETO.
keywords:
  - all
  - order
  - ids
  - and
  - categories
  - for
  - eto
  - assigned
  - number
  - category
  - name
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - order
---
# I_ASSIGNEDORDERANDCATEGORY

**All Order IDs and Categories for ETO**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERANDCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssignedOrderNumber` | ✓ | |  | `cast(cast (P_ETOAllOrderIDsCategories.AssignedOrderNumber as abap.char(12)) as daufn preserving type)` | `CHAR(12)` | Standing order number |
| `ETOOrdCategory` | ✓ | |  | `cast(cast (P_ETOAllOrderIDsCategories.ETOOrdCategory as abap.char(2)) as fins_ordcategory preserving type )` | `CHAR(2)` | Order Category |
| `AssignedOrdName` |  | |  | `cast(cast (P_ETOAllOrderIDsCategories.AssignedOrdName as abap.char(40)) as fins_orddesc preserving type )` | `CHAR(40)` | Assigned Ord Description |
| `_Text` | | ✓ | | | | |
| `_OrdCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssignedOrderCategoryTxt` | [0..*] |
| `_OrdCategory` | `I_AssignedOrderCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERANDCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERANDCATEGORY')/$value)*

```abap
//@AbapCatalog.viewEnhancementCategory: [#NONE]
//@AccessControl.authorizationCheck: #MANDATORY
//@EndUserText.label: 'All Order IDs and Categories for ETO'
//@Metadata.ignorePropagatedAnnotations: true
//@ObjectModel: { usageType:{ 
////                            serviceQuality: #D,                           
////                            sizeCategory: #S,
////                            dataClass: #CUSTOMIZING 
//  serviceQuality: #C,
//  sizeCategory: #L,
//  dataClass: #TRANSACTIONAL                            
//                                             
//                            },
//
//                representativeKey: 'AssignedOrderNumber',
//                supportedCapabilities: [    #ANALYTICAL_DIMENSION, 
//                                            #CDS_MODELING_ASSOCIATION_TARGET, 
//                                            #SQL_DATA_SOURCE, 
//                                            #CDS_MODELING_DATA_SOURCE],
//                modelingPattern: #ANALYTICAL_DIMENSION } 
//@Metadata.allowExtensions:true           
//@VDM.viewType: #COMPOSITE
////@Analytics: { dataCategory: #DIMENSION }
//@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
////@AccessControl.personalData.blocking: #REQUIRED
////@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
//@Analytics.internalName:#LOCAL



@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'All Order IDs and Categories for ETO'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{ serviceQuality: #D,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
                representativeKey: 'AssignedOrderNumber',
                supportedCapabilities: [    #ANALYTICAL_DIMENSION, 
                                            #CDS_MODELING_ASSOCIATION_TARGET, 
                                            #SQL_DATA_SOURCE, 
                                            #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION } 
                
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions:true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName:#LOCAL







define view entity I_AssignedOrderAndCategory as select distinct from P_ETOAllOrderIDsCategories
association [0..*] to I_AssignedOrderCategoryTxt as _Text on $projection.ETOOrdCategory = _Text.ETOOrdCategory
 association [0..1] to I_AssignedOrderCategory   as _OrdCategory    on  $projection.ETOOrdCategory = _OrdCategory.ETOOrdCategory
{
   @ObjectModel.text.element: ['AssignedOrdName']
  key cast(cast (P_ETOAllOrderIDsCategories.AssignedOrderNumber as abap.char(12)) as daufn preserving type) as AssignedOrderNumber,
  @ObjectModel.foreignKey.association: '_OrdCategory'
  key cast(cast (P_ETOAllOrderIDsCategories.ETOOrdCategory as abap.char(2)) as fins_ordcategory preserving type ) as ETOOrdCategory,
   @Semantics.text:true
   cast(cast (P_ETOAllOrderIDsCategories.AssignedOrdName as abap.char(40)) as fins_orddesc preserving type ) as AssignedOrdName,
  _Text,
  _OrdCategory
}
```
