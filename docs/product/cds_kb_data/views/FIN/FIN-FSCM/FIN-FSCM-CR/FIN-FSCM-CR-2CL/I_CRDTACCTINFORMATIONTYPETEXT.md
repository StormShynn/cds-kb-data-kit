---
name: I_CRDTACCTINFORMATIONTYPETEXT
description: "Crdtacctinformationtypetext"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `CrdtAcctInformationCategory` | ✓ | |  | `infocategory` |  |  |
| `CrdtAcctInformationType` | ✓ | |  | `infotype` |  |  |
| `CrdtAcctInformationTypeName` |  | |  | `infotype_txt` |  |  |
| `_Language` | | ✓ | | | | |
| `_CrdtAcctInfoCategory` | | ✓ | | | | |
| `_CrdtAcctInformationType` | | ✓ | | | | |

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
