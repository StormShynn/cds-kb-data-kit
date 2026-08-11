---
name: I_LOCATIONTYPETEXT
description: "Location Type - Text"
app_component: TM-MD-TN-LOC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPETEXT')/$value
semantic_en: "Location Type - Text"
semantic_vi: "I_LOCATIONTYPETEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "locationtypetext"
  - "location"
  - "type"
  - "language"
  - "desc"
tags:
  - TM
  - component:TM-MD-TN-LOC-2CL
  - interface-view
  - TM-MD
  - TM-MD-TN
  - TM-MD-TN-LOC
  - TM-MD-TN-LOC-2CL
---
# I_LOCATIONTYPETEXT

**Location Type - Text**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-LOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LocationType` | ✓ | |  | `cast(substring(domvalue_l, 1, 4) as /sapapo/c_loctype preserving type)` | `CHAR(4)` | Location Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LocationTypeDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_LocationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocationType` | `I_LocationType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPETEXT')/$value)*

```abap
@EndUserText:   {label:              'Location Type - Text'}
@Analytics:     {dataExtraction:       {enabled: true},
                 internalName:         #LOCAL}
@ObjectModel:   {representativeKey:  'LocationType',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'ILOCATIONTYPET'
@VDM:           {viewType:            #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202701',
                 lifecycle.successor: 'I_LocationTypeText_2'}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view entity I_LocationTypeText
  as select from dd07t
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */
  association [0..1] to I_LocationType as _LocationType on $projection.LocationType = _LocationType.LocationType
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_LocationType'
  key cast(substring(domvalue_l, 1, 4) as /sapapo/c_loctype preserving type) as LocationType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                             as Language,
      @Semantics.text
      ddtext                                                                 as LocationTypeDesc,


      /* Associations */
      _LocationType,
      _Language
}
where
      domname  = '/SAPAPO/C_LOCTYPE'
  and as4local = 'A';
```
