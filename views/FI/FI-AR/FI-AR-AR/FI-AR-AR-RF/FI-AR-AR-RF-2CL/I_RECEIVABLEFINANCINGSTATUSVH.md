---
name: I_RECEIVABLEFINANCINGSTATUSVH
description: Receivablefinancingstatusvh
app_component: FI-AR-AR-RF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - value-help
  - status
  - component:FI-AR-AR-RF-2CL
  - lob:Finance
---
# I_RECEIVABLEFINANCINGSTATUSVH

**Receivablefinancingstatusvh**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-RF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ReceivableFinancingStatus` | ✓ | |  |  |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName:'IRBLFNCNGSTATUSVH'
@EndUserText.label: 'Receivable Financing Status'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { dataClass: #META,
                             serviceQuality: #A,
                             sizeCategory: #S } }
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ReceivableFinancingStatus'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern:#VALUE_HELP_PROVIDER
@VDM.viewType: #COMPOSITE
@Search.searchable: true
define view entity I_ReceivableFinancingStatusVH as select from I_ReceivableFinancingStatus
{
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_LAST
      @Search: { defaultSearchElement: true }
      @Search.ranking:#HIGH
  key ReceivableFinancingStatus,
  
        _Text
      
}
```
