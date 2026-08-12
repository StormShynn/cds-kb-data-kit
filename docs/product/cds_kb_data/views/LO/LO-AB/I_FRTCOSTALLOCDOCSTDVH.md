---
name: I_FRTCOSTALLOCDOCSTDVH
description: "Frtcostallocdocstdvh"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-AB
  - lob:Logistics General
---
# I_FRTCOSTALLOCDOCSTDVH

**Frtcostallocdocstdvh**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FreightCostAllocationDocument` | ✓ | |  |  |  |  |
| `SettlmtDocType` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Freight Cost Allocation Document'
@AccessControl: { 
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: { 
   dataCategory: #VALUE_HELP,
   representativeKey: 'FreightCostAllocationDocument',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY], 
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@UI.headerInfo:{
   typeName:       'Freight Cost Allocation Document',
   typeNamePlural: 'Freight Cost Allocation Documents'
}
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_FrtCostAllocDocStdVH
  as select from I_FrtCostAllocDoc
{
      @UI: {
               lineItem: [ { position: 10, importance:#HIGH } ]
      }
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key FreightCostAllocationDocument,

      /* Required for DCL */
      @Consumption.hidden: true
      SettlmtDocType,      
      @Consumption.hidden: true
      CompanyCode,
      @Consumption.hidden: true
      PurchasingOrganization,
      @Consumption.hidden: true
      PurchasingGroup,
      @Consumption.hidden: true
      SalesOrganization,
      @Consumption.hidden: true
      DistributionChannel,
      @Consumption.hidden: true
      Division
}
```
