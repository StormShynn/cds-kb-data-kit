---
name: I_SUPLREVALCLASSIFICATION
description: Suplrevalclassification
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - classification
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALCLASSIFICATION

**Suplrevalclassification**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierClassification` | ✓ | |  | `classification` |  |  |
| `SuplrClfnFromValue` |  | |  | `from_value` |  |  |
| `SuplrClfnToValue` |  | |  | `to_value` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SuplrEvalClassificationText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.sqlViewName: 'IMMSEVCLFN'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Supplier Evaluation Classification'
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@ObjectModel.representativeKey: 'SupplierClassification'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalClassification

  as select from sews_clfn

  association [0..*] to I_SuplrEvalClassificationText as _Text on $projection.SupplierClassification = _Text.SupplierClassification
{
      @ObjectModel.text.association: '_Text'
  key classification as SupplierClassification,
      from_value     as SuplrClfnFromValue,
      to_value       as SuplrClfnToValue,

      _Text

}
```
