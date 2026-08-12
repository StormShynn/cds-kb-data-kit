---
name: I_EHSLOCATIONSTATUSTEXT
description: "EHS Location Status - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUSTEXT')/$value
semantic_en: "EHS Location Status - Text"
semantic_vi: "EHS Location Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "ehs"
  - "location"
  - "status"
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
# I_EHSLOCATIONSTATUSTEXT

**EHS Location Status - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationStatus` | ✓ | |  | `cast(dd07t.domvalue_l as ehfnd_loc_status_nc)` | `CHAR(2)` | Location Status |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as ehfnd_langu preserving type )` | `LANG(1)` | Language |
| `EHSLocationStatusText` |  | |  | `cast(dd07t.ddtext as ehfnd_loc_status_name)` | `CHAR(60)` | Location Status Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'EHS Location Status - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: { sqlViewName: 'ILOCSTATUSTEXT',
                compiler.compareFilter: true,
                buffering: { type: #FULL,
                             status: #ACTIVE } }

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel: { supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #NONE,
                resultSet.sizeCategory: #XS,
                dataCategory: #TEXT,
                representativeKey: 'EHSLocationStatus',
                usageType:{ serviceQuality: #A,
                            sizeCategory:  #S,
                            dataClass: #META } }

@Metadata.ignorePropagatedAnnotations:true
define view I_EHSLocationStatusText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast(dd07t.domvalue_l as ehfnd_loc_status_nc)           as EHSLocationStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'

  key cast( dd07t.ddlanguage as ehfnd_langu preserving type ) as Language,

      @Semantics.text:true
      cast(dd07t.ddtext as ehfnd_loc_status_name)             as EHSLocationStatusText,

      _Language
}
where
      dd07t.domname  = 'EHFND_LOC_STATUS'
  and dd07t.as4local = 'A'
```
