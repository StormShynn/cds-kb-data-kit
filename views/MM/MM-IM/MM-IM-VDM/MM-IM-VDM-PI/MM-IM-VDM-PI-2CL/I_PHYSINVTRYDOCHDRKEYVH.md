---
name: I_PHYSINVTRYDOCHDRKEYVH
description: Physinvtrydochdrkeyvh
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - value-help
  - header-level
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDOCHDRKEYVH

**Physinvtrydochdrkeyvh**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryDocument` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `_PhysInvtryDocHdrFiscalYearVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PhysInvtryDocHdrFiscalYearVH` | `I_PhysInvtryDocHdrFiscalYearVH` | [1..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Physical Inventory Document Key'
@VDM.viewType: #BASIC
@ObjectModel:{
               usageType: {
                            sizeCategory: #XL,
                            serviceQuality: #D,
                            dataClass: #TRANSACTIONAL
                          },
               dataCategory: #VALUE_HELP,
               representativeKey: 'PhysicalInventoryDocument',
               supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER ]
             }
@Search.searchable: true
@Consumption.ranked: true
@Analytics.technicalName: 'IPIDOCHDRKVH'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_PhysInvtryDocHdrKeyVH
  as select from I_PhysInvtryDocHeader
  association[1..1] to I_PhysInvtryDocHdrFiscalYearVH as _PhysInvtryDocHdrFiscalYearVH on $projection.FiscalYear = _PhysInvtryDocHdrFiscalYearVH.FiscalYear
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
  key PhysicalInventoryDocument,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @ObjectModel.foreignKey.association: 'I_PhysInvtryDocHdrFiscalYearVH'
  key FiscalYear,
      @Consumption.hidden : true
      Plant,
      
      _PhysInvtryDocHdrFiscalYearVH
}
```
