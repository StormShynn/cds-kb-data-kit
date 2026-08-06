---
name: I_CRDTACCTINFORMATIONTYPETEXT
description: Crdtacctinformationtypetext
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CRDTACCTINFORMATIONTYPETEXT

**Crdtacctinformationtypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `langu` |
| key `CrdtAcctInformationCategory` | `infocategory` |
| key `CrdtAcctInformationType` | `infotype` |
| `CrdtAcctInformationTypeName` | `infotype_txt` |
| `_Language` | *Association* |
| `_CrdtAcctInfoCategory` | *Association* |
| `_CrdtAcctInformationType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CrdtAcctInfoCategory` | `I_CrdtAcctInfoCategory` | [0..1] |
| `_CrdtAcctInformationType` | `I_CrdtAcctInformationType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Info Type at Credit Mgmt Account - Text'
@VDM: { viewType:  #BASIC,
        lifecycle: { contract.type: #PUBLIC_LOCAL_API }                                                           
      }
      
@ObjectModel: { dataCategory: #TEXT,
                usageType: { serviceQuality: #A,
                             sizeCategory:   #S,
                             dataClass:      #CUSTOMIZING
                           },
                representativeKey: 'CrdtAcctInformationType',
                supportedCapabilities: [#SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET
                                       ]
              }
              
@AbapCatalog: { sqlViewName: 'ICRDTACCTINFTYPT',
                compiler.compareFilter: true,
                preserveKey: true
              }
              
@AccessControl:  { authorizationCheck: #NOT_REQUIRED }

@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
define view I_CrdtAcctInformationTypeText 
  as select from ukm_infotyp0t 
  
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_CrdtAcctInfoCategory    as _CrdtAcctInfoCategory    on $projection.CrdtAcctInformationCategory = _CrdtAcctInfoCategory.CrdtAcctInformationCategory
  association [0..1] to I_CrdtAcctInformationType as _CrdtAcctInformationType on  $projection.CrdtAcctInformationCategory = _CrdtAcctInformationType.CrdtAcctInformationCategory
                                                                              and $projection.CrdtAcctInformationType     = _CrdtAcctInformationType.CrdtAcctInformationType
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu        as Language,

      @ObjectModel.foreignKey.association: '_CrdtAcctInfoCategory'
  key infocategory as CrdtAcctInformationCategory,
  
      @ObjectModel.foreignKey.association: '_CrdtAcctInformationType'
  key infotype     as CrdtAcctInformationType,
  
      @Semantics.text: true
      infotype_txt as CrdtAcctInformationTypeName,
      
      _Language,
      _CrdtAcctInfoCategory,
      _CrdtAcctInformationType
}
```
