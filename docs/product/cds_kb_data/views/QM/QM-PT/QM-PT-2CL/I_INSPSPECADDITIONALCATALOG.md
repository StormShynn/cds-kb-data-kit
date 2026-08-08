---
name: I_INSPSPECADDITIONALCATALOG
description: "Inspspecadditionalcatalog"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECADDITIONALCATALOG

**Inspspecadditionalcatalog**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSpecAdditionalCatalog` | ✓ | |  | `InspectionCatalog` |  |  |
| `_InspSpecAddlCatalogText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSpecAddlCatalogText` | `I_InspSpecAddlCatalogText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Additional Catalog of Master Charc'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IINSPSPECACTLG'
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    representativeKey: 'InspSpecAdditionalCatalog'
}
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true // reason: RAL
}
define view entity I_InspSpecAdditionalCatalog as select from I_Inspectioncatalog
   
   association [0..*] to I_InspSpecAddlCatalogText as _InspSpecAddlCatalogText
      on $projection.InspSpecAdditionalCatalog = _InspSpecAddlCatalogText.InspSpecAdditionalCatalog
      
{
   @ObjectModel.text.association: '_InspSpecAddlCatalogText'
   key I_Inspectioncatalog.InspectionCatalog  as InspSpecAdditionalCatalog
   
   /* Associations */
   ,_InspSpecAddlCatalogText
   
}
where
  not (
        I_Inspectioncatalog.InspectionCatalog = '1'
     or I_Inspectioncatalog.InspectionCatalog = '3'
  )
```
