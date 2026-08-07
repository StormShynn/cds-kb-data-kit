---
name: I_LOCATIONTYPETEXT_2
description: Locationtypetext 2
app_component: TM-MD-TN-LOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-TN
  - interface-view
  - text
  - component:TM-MD-TN-LOC-2CL
  - lob:Other
---
# I_LOCATIONTYPETEXT_2

**Locationtypetext 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-LOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LocationType` | ✓ | |  | `cast( domvalue_l as /sapapo/c_loctype )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `DomainValue` |  | |  | `domvalue_l` |
| `LocationTypeDesc` |  | |  | `cast( ddtext as /scmtms/vdm_loc_type_desc preserving type )` |
| `_Language` | | ✓ | | |
| `_LocationType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Location Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'LocationType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_LocationTypeText_2
  as select from dd07t
  association        to parent I_LocationType_2 as _LocationType on $projection.LocationType = _LocationType.LocationType
  association [0..1] to I_Language              as _Language     on $projection.Language = _Language.Language

{
     @ObjectModel.foreignKey.association: '_LocationType'
      @ObjectModel.text.element: ['LocationTypeDesc']
  key cast( domvalue_l as /sapapo/c_loctype ) as LocationType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                     as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                               as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as /scmtms/vdm_loc_type_desc preserving type )    as LocationTypeDesc,

      /* Associations */
      _LocationType,
      _Language
}
where
       domname                     = '/SAPAPO/C_LOCTYPE'
  and  as4local                    = 'A'
  and(
       substring(domvalue_l, 1, 4) = '1003' /* Shipping Point */
    or substring(domvalue_l, 1, 4) = '1021' /* Business Partner */
    or substring(domvalue_l, 1, 4) = '1100' /* Port */
    or substring(domvalue_l, 1, 4) = '1110' /* Airport */
    or substring(domvalue_l, 1, 4) = '1120' /* Railway Station */
    or substring(domvalue_l, 1, 4) = '1190' /* Rail Junction */
    or substring(domvalue_l, 1, 4) = '1200' /* Loading Point */
  );
```
