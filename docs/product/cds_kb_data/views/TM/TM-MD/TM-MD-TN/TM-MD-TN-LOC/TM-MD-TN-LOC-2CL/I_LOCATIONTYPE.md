---
name: I_LOCATIONTYPE
description: "Location Type"
app_component: TM-MD-TN-LOC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPE')/$value
semantic_en: "Location Type"
semantic_vi: "I_LOCATIONTYPE — CDS view cơ bản dựa trên dd07l."
keywords:
  - "locationtype"
  - "location"
  - "type"
tags:
  - TM
  - component:TM-MD-TN-LOC-2CL
  - interface-view
  - TM-MD
  - TM-MD-TN
  - TM-MD-TN-LOC
  - TM-MD-TN-LOC-2CL
---
# I_LOCATIONTYPE

**Location Type**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-LOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LocationType` | ✓ | |  | `cast(substring(domvalue_l, 1, 4) as /sapapo/c_loctype preserving type)` | `CHAR(4)` | Location Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LocationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOCATIONTYPE')/$value)*

```abap
@EndUserText:   {label:              'Location Type'}
@Analytics:     {dataCategory:       #DIMENSION, 
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ILOCATIONTYPE'
@ObjectModel:   {representativeKey:  'LocationType',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                                      modelingPattern:#ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:            #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.decommissioningPlannedForYearMonth: '202701',
                 lifecycle.successor: 'I_LocationType_2'}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
  
@ObjectModel.sapObjectNodeType.name: 'LocationType'
  
 /*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */                
define view entity I_LocationType
as select from dd07l
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */
association[0..*] to I_LocationTypeText as _Text on $projection.LocationType = _Text.LocationType
{
    @ObjectModel.text.association: '_Text'
key cast(substring(domvalue_l, 1, 4) as /sapapo/c_loctype preserving type) as LocationType,
    
    /* Associations */
    _Text
}
where domname = '/SAPAPO/C_LOCTYPE'
  and as4local = 'A';
```
