---
name: I_INSPSPECADDITIONALCATALOG
description: "Inspspecadditionalcatalog"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
