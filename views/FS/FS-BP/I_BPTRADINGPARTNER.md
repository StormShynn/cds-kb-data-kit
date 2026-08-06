---
name: I_BPTRADINGPARTNER
description: Bptradingpartner
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
  - partner
  - component:FS-BP
  - lob:Other
---
# I_BPTRADINGPARTNER

**Bptradingpartner**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TradingPartner` | `t880.rcomp` |

## Source Code

```abap
@ObjectModel: { representativeKey: 'TradingPartner',
                dataCategory: #VALUE_HELP,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },              
                resultSet.sizeCategory: #XS,
                sapObjectNodeType.name: 'TradingPartnerCompanyCode',           
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION  
              }
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true
           }      
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@AccessControl.authorizationCheck: #NOT_REQUIRED            
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Trading Partner of Business Partner'

define view entity I_BPTradingPartner as select from t880 {
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   key t880.rcomp as TradingPartner  
}
```
