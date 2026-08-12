---
name: I_RETAILCHARACTERISTIC
description: "Controlling Characteristics Header"
app_component: LO-RFM-CA-CV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTIC')/$value
semantic_en: "Controlling Characteristics Header"
semantic_vi: "Controlling Characteristics Header — CDS view giao diện dựa trên wrf_charval_head."
keywords:
  - "controlling"
  - "characteristics"
  - "header"
  - "charc"
  - "internal"
  - "characteristic"
  - "retail"
  - "type"
  - "valdtn"
  - "last"
  - "changed"
  - "user"
tags:
  - LO
  - component:LO-RFM-CA-CV-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-CV
  - LO-RFM-CA-CV-2CL
  - lob:cross_application components
  - lob:logistics general
---
# I_RETAILCHARACTERISTIC

**Controlling Characteristics Header**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-CV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  | `cast( atinn as numc10 preserving type )` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `Characteristic` |  | |  | `atnam` | `CHAR(30)` | Characteristic Name |
| `RetailCharacteristicType` |  | |  | `chartyp` | `CHAR(1)` | Characteristic Type |
| `RtlCharcValValdtn` |  | |  | `checkopt` | `CHAR(1)` | Check Option |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangedDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `_RetailCharacteristicType` | | ✓ | | | | |
| `_RtlCharcValValdtn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RetailCharacteristicType` | `I_RetailCharacteristicType` | [0..1] |
| `_RtlCharcValValdtn` | `I_RtlCharcValValdtn` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTIC')/$value)*

```abap
//Header Table for Controlling Characteristics
@EndUserText.label: 'Controlling Characteristics Header'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
// Technical Settings
@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.sapObjectNodeType.name: 'RetailCharacteristicValueType'
@ObjectModel: {
 modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION  ],
                            
usageType.dataClass: #MASTER,
usageType.serviceQuality : #A,
usageType.sizeCategory : #S
}

@Metadata.ignorePropagatedAnnotations:true

// For Data Extraction
@Analytics.internalName:  #LOCAL
@Analytics: {
dataCategory: #DIMENSION,
dataExtraction: {
enabled: true,
delta.changeDataCapture: {
automatic: true
    }
  }
}


//View Entity
define view entity I_RetailCharacteristic
  as select from wrf_charval_head
  association [0..1] to I_RetailCharacteristicType as _RetailCharacteristicType on $projection.RetailCharacteristicType = _RetailCharacteristicType.RetailCharacteristicType
  association [0..1] to I_RtlCharcValValdtn        as _RtlCharcValValdtn        on $projection.RtlCharcValValdtn = _RtlCharcValValdtn.RtlCharcValValdtn
{

      @ObjectModel.text.element: ['Characteristic']
  key cast( atinn as numc10 preserving type ) as CharcInternalID,
      @Semantics.text: true
      atnam                                   as Characteristic,
      @ObjectModel.foreignKey.association: '_RetailCharacteristicType'
      chartyp                                 as RetailCharacteristicType,
      @ObjectModel.foreignKey.association: '_RtlCharcValValdtn'
      checkopt                                as RtlCharcValValdtn,
      @Semantics.user.lastChangedBy: true
      aenam                                   as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      aedat                                   as LastChangedDate,

      //Expose Association
      _RetailCharacteristicType,
      _RtlCharcValValdtn

}
```
