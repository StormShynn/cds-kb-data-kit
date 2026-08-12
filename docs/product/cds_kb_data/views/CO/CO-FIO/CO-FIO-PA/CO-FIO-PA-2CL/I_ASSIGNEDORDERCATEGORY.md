---
name: I_ASSIGNEDORDERCATEGORY
description: "Order Category for ETO"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORY')/$value
semantic_en: "Order Category for ETO"
semantic_vi: "Order Category for ETO — CDS view giao diện dựa trên P_ETOOrdCategory."
keywords:
  - "order"
  - "category"
  - "for"
  - "eto"
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
# I_ASSIGNEDORDERCATEGORY

**Order Category for ETO**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ETOOrdCategory` | ✓ | |  |  | `CHAR(2)` | Order Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssignedOrderCategoryTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Order Category for ETO'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{ serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
                representativeKey: 'ETOOrdCategory',
                supportedCapabilities: [    #ANALYTICAL_DIMENSION, 
                                            #CDS_MODELING_ASSOCIATION_TARGET, 
                                            #SQL_DATA_SOURCE, 
                                            #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION } 
                
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION }

//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName:#LOCAL

define view entity I_AssignedOrderCategory as select from P_ETOOrdCategory

association [0..*] to I_AssignedOrderCategoryTxt as _Text on $projection.ETOOrdCategory = _Text.ETOOrdCategory
{
@ObjectModel.text.association: '_Text'
    key ETOOrdCategory,
    _Text
}
```
