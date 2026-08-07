---
name: I_BILLOFOPERATIONSTYPE
description: Billofoperationstype
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_BILLOFOPERATIONSTYPE

**Billofoperationstype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  | `cast(plnty as billofoperationstype preserving type)` |
| `BillOfOperationsApplication` |  | |  | `cast(plnaw as billofoperationsapplication preserving type)` |
| `_Text` | | ✓ | | |
| `_BillOfOperationsApplication` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillOfOperationsTypeText` | [0..*] |
| `_BillOfOperationsApplication` | `I_BOOApplication` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Bill of Operations Type'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsType'
@Analytics.dataExtraction.enabled: true
//@ObjectModel.sapObjectType: 'BillOfOperationsType'
define view I_BillOfOperationsType
  as select from tca01

  association [0..*] to I_BillOfOperationsTypeText as _Text                        on $projection.BillOfOperationsType = _Text.BillOfOperationsType
  association [0..1] to I_BOOApplication           as _BillOfOperationsApplication on $projection.BillOfOperationsApplication = _BillOfOperationsApplication.BillOfOperationsApplication

{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(plnty as billofoperationstype preserving type)        as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsApplication'
      cast(plnaw as billofoperationsapplication preserving type) as BillOfOperationsApplication,

      // Associations
      _Text,
      _BillOfOperationsApplication
};
```
