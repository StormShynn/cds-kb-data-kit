---
name: I_JOURNALENTRYCOMPANYCODEVH
description: "Journal EntryCompany CodeVH"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - value-help
  - company-code
  - journal-entry
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:JournalEntry
  - bo:CompanyCode
---
# I_JOURNALENTRYCOMPANYCODEVH

**Journal EntryCompany CodeVH**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `CompanyCodeName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'CompanyCode',
                usageType.sizeCategory: #S,
                usageType.dataClass: #ORGANIZATIONAL,
                usageType.serviceQuality: #B,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }

@AccessControl.authorizationCheck: #MANDATORY

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Company Code'
define view entity I_JournalEntryCompanyCodeVH as select from I_CompanyCode as I_CompanyCode {
  @ObjectModel.text.element: ['CompanyCodeName']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.7
  key I_CompanyCode.CompanyCode,

  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.7
  @Semantics.text: true
  I_CompanyCode.CompanyCodeName,
  
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8        
  I_CompanyCode.CityName,
  I_CompanyCode.Country,
  I_CompanyCode.Currency,
  
  I_CompanyCode._Currency,
  I_CompanyCode._Country
  
}
```
