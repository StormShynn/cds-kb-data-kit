---
name: I_BR_TAXJURISDICTIONVALUEHELP
description: "BR Taxjurisdictionvaluehelp"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - value-help
  - tax
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_TAXJURISDICTIONVALUEHELP

**BR Taxjurisdictionvaluehelp**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( country as land1 preserving type )` |  |  |
| `TaxJurisdiction` | ✓ | |  | `taxjurcode` |  |  |
| `TaxJurisdictionName` |  | | `_BR_TaxJurisdictionText` | `TaxJurisdictionName` |  |  |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_TaxJurisdictionText` | `I_BR_TaxJurisdictionText` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IBRTAXJURVH'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@EndUserText.label: 'Brazil Tax Jurisdiction'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  dataCategory: #VALUE_HELP, 
  representativeKey: 'TaxJurisdiction',
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  modelingPattern: #VALUE_HELP_PROVIDER,
  usageType: {
    sizeCategory: #S,
    dataClass: #CUSTOMIZING,
    serviceQuality: #A
  }
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_BR_TaxJurisdictionValueHelp
  as select from j_1btxjur
  association [0..1] to I_BR_TaxJurisdictionText as _BR_TaxJurisdictionText on  _BR_TaxJurisdictionText.Language = $session.system_language
                                                                            and _BR_TaxJurisdictionText.Country = $projection.Country
                                                                            and _BR_TaxJurisdictionText.TaxJurisdiction = $projection.TaxJurisdiction
  association [0..1] to I_Country                as _Country                on _Country.Country = $projection.Country
{

      @ObjectModel.foreignKey.association: '_Country'
      @Consumption.valueHelpDefinition: [{ entity : {name: 'I_CountryVH', element: 'Country'  } }]
  key cast( country as land1 preserving type ) as Country,
  
      @ObjectModel.text.element: ['TaxJurisdictionName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
  key taxjurcode as TaxJurisdiction,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      _BR_TaxJurisdictionText.TaxJurisdictionName as TaxJurisdictionName,
      
      _Country
}
```
