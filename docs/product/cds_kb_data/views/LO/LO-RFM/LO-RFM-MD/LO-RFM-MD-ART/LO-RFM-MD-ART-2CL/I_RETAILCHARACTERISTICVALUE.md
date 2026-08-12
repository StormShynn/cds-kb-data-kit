---
name: I_RETAILCHARACTERISTICVALUE
description: "Retail Characteristic Value"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUE')/$value
semantic_en: "Retail Characteristic Value"
semantic_vi: "Retail Characteristic Value — CDS view cơ bản dựa trên wrf_charval."
keywords:
  - "retail"
  - "characteristic"
  - "value"
  - "internal"
  - "creation"
  - "date"
  - "created"
  - "user"
  - "last"
  - "change"
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
# I_RETAILCHARACTERISTICVALUE

**Retail Characteristic Value**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharacteristicInternalID` | ✓ | |  | `atinn` | `NUMC(10)` | Internal Characteristic Number |
| `RetailCharacteristicValue` | ✓ | |  | `atwrt` | `CHAR(18)` | Characteristic Value |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `_Characteristic` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [1..1] |
| `_Text` | `I_RetailCharacteristicValueT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUE')/$value)*

```abap
@AbapCatalog.sqlViewName              : 'IRTLCHARCVAL'
@AbapCatalog.compiler.compareFilter   : true
@AccessControl: {
    authorizationCheck                : #CHECK,
    personalData.blocking             : #NOT_REQUIRED
}
@ClientHandling.algorithm             : #SESSION_VARIABLE
@VDM: {
  viewType                            : #BASIC,
  lifecycle.contract.type             : #PUBLIC_LOCAL_API
}
@ObjectModel: {
    representativeKey                 : 'RetailCharacteristicValue',
    usageType.serviceQuality          : #A,
    usageType.sizeCategory            : #M,
    usageType.dataClass               : #MASTER,
    supportedCapabilities             : [ #SQL_DATA_SOURCE,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations : true
@EndUserText.label                    : 'Retail Characteristic Value'

define view I_RetailCharacteristicValue
  as select from wrf_charval 
  association [1..1] to I_ClfnCharacteristicForKeyDate  as _Characteristic on  $projection.CharacteristicInternalID  = _Characteristic.CharcInternalID                                                                      
  association [0..*] to I_RetailCharacteristicValueT    as _Text           on  $projection.CharacteristicInternalID  = _Text.CharacteristicInternalID
                                                                           and $projection.RetailCharacteristicValue = _Text.RetailCharacteristicValue
{
      @ObjectModel.foreignKey.association : '_Characteristic'
  key atinn as CharacteristicInternalID,     
      @ObjectModel.text.association       : '_Text'
  key atwrt as RetailCharacteristicValue,
      // Administrative Data
      @Semantics.systemDate.createdAt     : true
      erdat as CreationDate,
      @Semantics.user.createdBy           : true
      ernam as CreatedByUser,
      @Semantics.systemDate.lastChangedAt : true
      aedat as LastChangeDate,
      @Semantics.user.lastChangedBy       : true
      aenam as LastChangedByUser,
      /* Associations */
      _Characteristic,
      _Text    
}
```
