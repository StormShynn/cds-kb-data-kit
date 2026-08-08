---
name: I_BPCNTRLBANKCOUNTRYREGIONTEXT
description: "Bpcntrlbankcountryregiontext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - bank
  - country
  - text
  - component:FS-BP
  - lob:Other
  - bo:Bank
---
# I_BPCNTRLBANKCOUNTRYREGIONTEXT

**Bpcntrlbankcountryregiontext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `BPCentralBankCountryRegion` | ✓ | |  | `country_key` |  |  |
| `BPCntrlBkCtryRegDescription` |  | |  | `country_long` |  |  |
| `_BPCntrlBankCountryRegion` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCntrlBankCountryRegion` | `I_BPCntrlBankCountryRegion` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCBCTRYREGTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPCentralBankCountryRegion',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,             
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true        
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'Central Bank Country Region - Text'

define view I_BPCntrlBankCountryRegionText
  as select from tplzbt
  association [0..1] to I_BPCntrlBankCountryRegion as _BPCntrlBankCountryRegion on $projection.BPCentralBankCountryRegion = _BPCntrlBankCountryRegion.BPCentralBankCountryRegion
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tplzbt.langu        as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPCntrlBankCountryRegion'
  key tplzbt.country_key  as BPCentralBankCountryRegion,

      @Semantics.text: true
      tplzbt.country_long as BPCntrlBkCtryRegDescription,

      _BPCntrlBankCountryRegion,
      _Language
}
```
