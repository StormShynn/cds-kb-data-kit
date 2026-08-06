---
name: I_APARTOLERANCEGROUPTEXT
description: Apartolerancegrouptext
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - text-view
  - text
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_APARTOLERANCEGROUPTEXT

**Apartolerancegrouptext**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `cast( bukrs as fis_bukrs )` |
| key `Language` | `spras` |
| key `APARToleranceGroup` | `cast( togru as farp_togru )` |
| `APARToleranceGroupName` | `txt30` |
| `_CompanyCode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:    { sqlViewName:                 'IFIAPARTOLGRPT',
                   preserveKey:                 true,
                   compiler.compareFilter:      true,
                   buffering.status: #ACTIVE,
                   buffering.type: #FULL }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             false }
@VDM:            { viewType:                    #BASIC }
@ClientHandling: { algorithm:                   #SESSION_VARIABLE }
@AccessControl:  { authorizationCheck:          #NOT_REQUIRED }
@ObjectModel:    { modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #M,
                   usageType.dataClass:         #CUSTOMIZING,
                   representativeKey: 'APARToleranceGroup',
                   dataCategory: #TEXT,
                   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
                   }
@EndUserText.label: 'Tolerance groups of customer or supplier accounts - Text'
define view I_APARToleranceGroupText
  as select from t043gt
  association [0..1] to I_CompanyCode as _CompanyCode on _CompanyCode.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Language    as _Language    on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( bukrs as fis_bukrs )  as CompanyCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                       as Language,
  key cast( togru as farp_togru ) as APARToleranceGroup,

      @Semantics.text: true
      txt30                       as APARToleranceGroupName,

      _CompanyCode,
      _Language
}
```
