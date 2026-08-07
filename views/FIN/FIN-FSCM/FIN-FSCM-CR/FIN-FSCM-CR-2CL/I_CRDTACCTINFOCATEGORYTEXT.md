---
name: I_CRDTACCTINFOCATEGORYTEXT
description: "Crdtacctinfocategorytext"
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
# I_CRDTACCTINFOCATEGORYTEXT

**Crdtacctinfocategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `CrdtAcctInformationCategory` | ✓ | |  | `infocategory` |  |  |
| `CrdtAcctInfoCategoryName` |  | |  | `infocategory_txt` |  |  |
| `_CrdtAcctInfoCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CrdtAcctInfoCategory` | `I_CrdtAcctInfoCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Info Category for Credit Mgmt Account - Text'

@VDM: { viewType:  #BASIC,
        lifecycle: { contract.type: #PUBLIC_LOCAL_API }
      }

@ObjectModel: { dataCategory: #TEXT,
                usageType: { serviceQuality: #A,
                             sizeCategory:   #S,
                             dataClass:      #CUSTOMIZING
                           },
                representativeKey: 'CrdtAcctInformationCategory',
                supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET
                                     ]
                }
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog: { sqlViewName: 'ICRDTACCTINFOCT',
                compiler.compareFilter: true,
                preserveKey: true
              }

@AccessControl:  { authorizationCheck: #NOT_REQUIRED }

@ClientHandling: { algorithm: #SESSION_VARIABLE }

define view I_CrdtAcctInfoCategoryText
  as select from ukm_infocat0t
  association [0..1] to I_CrdtAcctInfoCategory as _CrdtAcctInfoCategory on $projection.CrdtAcctInformationCategory = _CrdtAcctInfoCategory.CrdtAcctInformationCategory
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu            as Language,

      @ObjectModel.foreignKey.association: '_CrdtAcctInfoCategory'
  key infocategory     as CrdtAcctInformationCategory,

      @Semantics.text: true
      infocategory_txt as CrdtAcctInfoCategoryName,

      //Expose associations
      _Language,
      _CrdtAcctInfoCategory
}
```
