---
name: C_SUPLRINVCSUPLRTOLSTTGDEX
description: "Suplrinvcsuplrtolsttgdex"
app_component: MM-PUR-ANA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLRINVCSUPLRTOLSTTGDEX

**Suplrinvcsuplrtolsttgdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `CompanyCode` | ✓ | |  |  |  |  |
| `SuplrInvcVerificatTolGroup` | ✓ | |  |  |  |  |
| `APARToleranceGroupName` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE , #EXTRACTION_DATA_SOURCE ,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION]
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.sapObjectNodeType.name: 'SuplrInvcVerificatTolGroup'
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Supplier Invoice Tolerance Setting'
@ObjectModel.representativeKey:  'SuplrInvcVerificatTolGroup'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view entity C_SuplrInvcSuplrTolSttgDEX
  as select from I_SuplrInvcSuplrTolSttgsAPI01
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @Search: { defaultSearchElement: true }
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @Search: { defaultSearchElement: true }
      @ObjectModel.text.element: ['APARToleranceGroupName']
  key SuplrInvcVerificatTolGroup,
      @Semantics.text: true
      APARToleranceGroupName,
      
      _CompanyCode
}
```
