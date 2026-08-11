---
name: I_RETAILCHARACTERISTICVALUET
description: "Retail Characteristic Value - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUET')/$value
semantic_en: "Retail Characteristic Value - Text"
semantic_vi: "Retail Characteristic Value - Text — CDS view cơ bản (master data) dựa trên wrf_charvalt."
keywords:
  - "retail"
  - "characteristic"
  - "value"
  - "text"
  - "internal"
  - "language"
  - "desc"
tags:
  - LO
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_RETAILCHARACTERISTICVALUET

**Retail Characteristic Value - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharacteristicInternalID` | ✓ | |  | `atinn` | `NUMC(10)` | Internal Characteristic Number |
| `RetailCharacteristicValue` | ✓ | |  | `atwrt` | `CHAR(18)` | Characteristic Value |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RetailCharacteristicValueDesc` |  | |  | `atwtb` | `CHAR(70)` | Characteristic value description |
| `_Characteristic` | | ✓ | | | | |
| `_RetailCharacteristicValue` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [1..1] |
| `_RetailCharacteristicValue` | `I_RetailCharacteristicValue` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUET')/$value)*

```abap
@AbapCatalog.sqlViewName              : 'IRTLCHARCVALT'
@AbapCatalog.compiler.compareFilter   : true
@AccessControl.authorizationCheck     : #CHECK
@ClientHandling.algorithm             : #SESSION_VARIABLE
@VDM: {
  viewType                            : #BASIC,
  lifecycle.contract.type             : #PUBLIC_LOCAL_API
}
@ObjectModel: {
    dataCategory                      : #TEXT,
    representativeKey                 : 'RetailCharacteristicValue',
    usageType: {
        serviceQuality                : #A,
        sizeCategory                  : #M,
        dataClass                     : #MASTER
   },
   supportedCapabilities              : [ #SQL_DATA_SOURCE,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #LANGUAGE_DEPENDENT_TEXT ],
   modelingPattern                    :   #LANGUAGE_DEPENDENT_TEXT
}
@Metadata.ignorePropagatedAnnotations : true
@EndUserText.label                    : 'Retail Characteristic Value - Text'

define view I_RetailCharacteristicValueT
  as select from wrf_charvalt
  association [1..1] to I_ClfnCharacteristicForKeyDate  as _Characteristic            on  $projection.CharacteristicInternalID  = _Characteristic.CharcInternalID
  association [1..1] to I_RetailCharacteristicValue     as _RetailCharacteristicValue on  $projection.CharacteristicInternalID  = _RetailCharacteristicValue.CharacteristicInternalID
                                                                                      and $projection.RetailCharacteristicValue = _RetailCharacteristicValue.RetailCharacteristicValue
  association [0..1] to I_Language                      as _Language                  on  $projection.Language                  = _Language.Language
{
      @ObjectModel.foreignKey.association : '_Characteristic'
  key atinn as CharacteristicInternalID,
      @ObjectModel.foreignKey.association : '_RetailCharacteristicValue'
  key atwrt as RetailCharacteristicValue,
      @ObjectModel.foreignKey.association : '_Language'
      @Semantics.language                 : true
  key spras as Language,
      @Semantics.text                     : true
      atwtb as RetailCharacteristicValueDesc,
      /* Associations */
      _Characteristic,
      _RetailCharacteristicValue,
      _Language
}
```
