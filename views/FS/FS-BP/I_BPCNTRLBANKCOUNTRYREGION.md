---
name: I_BPCNTRLBANKCOUNTRYREGION
description: Bpcntrlbankcountryregion
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
  - bank
  - country
  - component:FS-BP
  - lob:Other
  - bo:Bank
---
# I_BPCNTRLBANKCOUNTRYREGION

**Bpcntrlbankcountryregion**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BPCentralBankCountryRegion` | `tplzb.country_key` |
| `_Text` | *Association* |
| `_BPFinancialServicesReporting` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCntrlBankCountryRegionText` | [0..*] |
| `_BPFinancialServicesReporting` | `I_BPFinancialServicesReporting` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCBCTRYREG',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'BPCentralBankCountryRegion',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'DE_BPCntrlBkCountryRegionCode',           
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION 
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }              
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Central Bank Country Region'

define view I_BPCntrlBankCountryRegion
  as select from tplzb
  association [0..*] to I_BPCntrlBankCountryRegionText as _Text                         on $projection.BPCentralBankCountryRegion = _Text.BPCentralBankCountryRegion
  association [0..*] to I_BPFinancialServicesReporting as _BPFinancialServicesReporting on $projection.BPCentralBankCountryRegion = _BPFinancialServicesReporting.BPCentralBankCountryRegion
{     
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tplzb.country_key as BPCentralBankCountryRegion,

      _Text,
      _BPFinancialServicesReporting
}
```
