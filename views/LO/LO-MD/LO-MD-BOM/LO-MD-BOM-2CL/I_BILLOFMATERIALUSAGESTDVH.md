---
name: I_BILLOFMATERIALUSAGESTDVH
description: Bill of MaterialUSAGESTDVH
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - value-help
  - standard-value-help
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALUSAGESTDVH

**Bill of MaterialUSAGESTDVH**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterialVariantUsage` | `BillOfMaterialVariantUsage` |
| key `Language` | `Language` |
| `BillOfMaterialVariantUsageDesc` | `BillOfMaterialVariantUsageDesc` |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@Analytics.technicalName: 'IBOMUSAGE_VH'
@ObjectModel.representativeKey: 'BillOfMaterialVariantUsage'

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@ObjectModel.resultSet.sizeCategory: #XS

@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Bill Of Material Usage'


define view entity I_BillOfMaterialUsageStdVH as select from I_BillOfMaterialUsage {
  @ObjectModel.text.element: ['BillOfMaterialVariantUsageDesc']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key BillOfMaterialVariantUsage,
   @Semantics.language: true
   @UI.hidden: true
  key Language,
   @Semantics.text: true
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
  BillOfMaterialVariantUsageDesc
}
```
