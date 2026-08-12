---
name: I_CRDTACCTINFORMATIONTYPE
description: "Crdtacctinformationtype"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CRDTACCTINFORMATIONTYPE

**Crdtacctinformationtype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtAcctInformationCategory` | ✓ | |  | `infocategory` |  |  |
| `CrdtAcctInformationType` | ✓ | |  | `infotype` |  |  |
| `_Text` | | ✓ | | | | |
| `_CrdtAcctInfoCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CrdtAcctInformationTypeText` | [0..*] |
| `_CrdtAcctInfoCategory` | `I_CrdtAcctInfoCategory` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Information Type at Credit Mgmt Account'
@VDM: { viewType:  #BASIC,
        lifecycle: { contract.type: #PUBLIC_LOCAL_API }
      }

//@ObjectModel: { dataCategory: #TEXT,
@ObjectModel:  { usageType: { serviceQuality: #A,
                              sizeCategory:   #S,
                              dataClass:      #CUSTOMIZING
                            },
                representativeKey: 'CrdtAcctInformationType',
                supportedCapabilities: [#SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET
                                     ]
              }

@AbapCatalog: { sqlViewName: 'ICRDTACCTINFTYP',
                compiler.compareFilter: true,
                preserveKey: true
              }

@AccessControl:  { authorizationCheck: #NOT_REQUIRED }

@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
define view I_CrdtAcctInformationType
  as select from ukm_infotyp

  association [0..*] to I_CrdtAcctInformationTypeText as _Text                 on  $projection.CrdtAcctInformationCategory = _Text.CrdtAcctInformationCategory
                                                                               and $projection.CrdtAcctInformationType     = _Text.CrdtAcctInformationType
  association [0..1] to I_CrdtAcctInfoCategory        as _CrdtAcctInfoCategory on  $projection.CrdtAcctInformationCategory = _CrdtAcctInfoCategory.CrdtAcctInformationCategory
{
      @ObjectModel.foreignKey.association: '_CrdtAcctInfoCategory'
  key infocategory as CrdtAcctInformationCategory,

      @ObjectModel.text.association: '_Text'
  key infotype     as CrdtAcctInformationType,

      //Exposed associations
      _Text,
      _CrdtAcctInfoCategory
}
```
