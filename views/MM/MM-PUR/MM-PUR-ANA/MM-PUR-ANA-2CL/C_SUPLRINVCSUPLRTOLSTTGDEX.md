---
name: C_SUPLRINVCSUPLRTOLSTTGDEX
description: Suplrinvcsuplrtolsttgdex
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
