---
name: I_QLTYMGMTSYSTEMFORSUPPLIERVH
description: "Qltymgmtsystemforsuppliervh"
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
  - value-help
  - supplier
  - component:QM-PT-2CL
  - lob:Quality Management
  - bo:Supplier
---
# I_QLTYMGMTSYSTEMFORSUPPLIERVH

**Qltymgmtsystemforsuppliervh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityMgmtSystemForSupplier` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Quality Management System For Supplier'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IQTMGMTSYSSUPP'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #ORGANIZATIONAL}
@ObjectModel.representativeKey: 'QualityMgmtSystemForSupplier'
@Search.searchable: true
@Consumption.ranked: true

define view entity I_QltyMgmtSystemForSupplierVH
  as select from I_QualityMgmtSystemForSupplier
{
      @ObjectModel.text.element: [ 'QltyMgmtSystemForSupplierText' ]
      @UI.textArrangement: #TEXT_ONLY

  key QualityMgmtSystemForSupplier,

      @Semantics.text:true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.7, ranking: #HIGH }
      _QltyMgmtSystemForSupplierTxt[1: Language = $session.system_language].QltyMgmtSystemForSupplierText
}
```
