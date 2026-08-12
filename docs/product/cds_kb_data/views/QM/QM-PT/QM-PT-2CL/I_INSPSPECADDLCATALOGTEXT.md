---
name: I_INSPSPECADDLCATALOGTEXT
description: "Inspspecaddlcatalogtext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECADDLCATALOGTEXT

**Inspspecaddlcatalogtext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `InspSpecAdditionalCatalog` | ✓ | |  | `InspectionCatalog` |  |  |
| `InspSpecAdditionalCatalogText` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Addl Catalog of Master Charc - Text'
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspSpecAdditionalCatalog'
}
@Analytics.technicalName: 'IINSPSPECACTLGT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecAddlCatalogText
  as select from I_InspectionCatalogText
{
      @Semantics.language: true
  key I_InspectionCatalogText.Language                          as Language,

  key I_InspectionCatalogText.InspectionCatalog                 as InspSpecAdditionalCatalog,

      @Semantics.text: true
      @EndUserText.label: 'Additional Catalog Text'
      I_InspectionCatalogText.InspSpecAdditionalCatalogText     as InspSpecAdditionalCatalogText

}
where
  not(
       I_InspectionCatalogText.InspectionCatalog = '1'
    or I_InspectionCatalogText.InspectionCatalog = '3'
  )
```
