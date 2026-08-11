---
name: I_EHSLOCATIONTYPETEXT
description: "EHS Location Type - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPETEXT')/$value
semantic_en: "EHS Location Type - Text"
semantic_vi: "EHS Location Type - Text — CDS view giao diện dựa trên ehfndc_loc_typ_t."
keywords:
  - "ehs"
  - "location"
  - "type"
  - "text"
  - "language"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONTYPETEXT

**EHS Location Type - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationType` | ✓ | |  | `cast( code as ehfnd_loc_type_code_nc preserving type )` | `CHAR(21)` | Location Type |
| `Language` | ✓ | |  | `cast( language as ehfnd_langu preserving type )` | `LANG(1)` | Language |
| `EHSLocationTypeText` |  | |  | `cast( description as ehfnd_loc_type_name preserving type )` | `CHAR(40)` | Location Type Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPETEXT')/$value)*

```abap
@EndUserText.label: 'EHS Location Type - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: { sqlViewName: 'ILOCTYPETEXT',
                compiler.compareFilter: true,
                buffering: { type: #GENERIC,
                             numberOfKeyFields: 2,
                             status: #ACTIVE } }

@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'EHSLocationType',
                resultSet.sizeCategory: #XS,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #NONE,
                usageType:{ serviceQuality: #A,
                            sizeCategory:  #S,         // < 1.000
                            dataClass: #CUSTOMIZING } }

@Metadata.ignorePropagatedAnnotations:true
define view I_EHSLocationTypeText
  as select from ehfndc_loc_typ_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( code as ehfnd_loc_type_code_nc preserving type )     as EHSLocationType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( language as ehfnd_langu preserving type )            as Language,

      @Semantics.text:true
      cast( description as ehfnd_loc_type_name preserving type ) as EHSLocationTypeText,

      _Language
}
```
