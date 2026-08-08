---
name: I_REGIONALSTRUCTURECHECKSTATUS
description: "Regionalstructurecheckstatus"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - status
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_REGIONALSTRUCTURECHECKSTATUS

**Regionalstructurecheckstatus**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RegionalStructureCheckStatus` | ✓ | |  | `cast ( domvalue_l as ad_checkst )` | `CHAR(1)` | City File Test Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RegionalStrucCheckStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRGNLSTRUCCHKSTS'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@EndUserText.label: 'Regional Structure Check Status'
@ObjectModel.representativeKey: 'RegionalStructureCheckStatus'
@ObjectModel.sapObjectNodeType.name: 'RegionalStructureCheckStatus'
@VDM.viewType: #BASIC
define view I_RegionalStructureCheckStatus as select from dd07l
 association [0..*] to I_RegionalStrucCheckStatusText as _Text on $projection.RegionalStructureCheckStatus = _Text.RegionalStructureCheckStatus
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ad_checkst ) as RegionalStructureCheckStatus,
      _Text
}
where
      as4local = 'A'
  and domname  = 'AD_CHECKST'
```
