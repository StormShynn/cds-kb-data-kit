---
name: I_RECONCILIATIONACCTTYPE
description: Reconciliationaccttype
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_RECONCILIATIONACCTTYPE

**Reconciliationaccttype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ReconciliationAccountType` | ✓ | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Reconciliationaccttypetext` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRACCTTYPE'
@EndUserText.label: 'Reconciliation Account Type'
@Analytics: { 
  dataCategory: #DIMENSION
  //dataExtraction.enabled: true 
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ReconciliationAccountType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
define view I_Reconciliationaccttype
  as select from dd07l
  association [0..*] to I_Reconciliationaccttypetext as _Text on $projection.ReconciliationAccountType = _Text.ReconciliationAccountType
{
      @ObjectModel.text.association: '_Text'
  key domvalue_l as ReconciliationAccountType,
      _Text
}
where
      domname  = 'MITKZ'
  and as4local = 'A'
```
