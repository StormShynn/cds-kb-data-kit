---
name: I_TRANSPORTATIONMODECATEGORYT
description: Transportationmodecategoryt
app_component: TM-MD-TN-2CL
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
  - transport
  - component:TM-MD-TN-2CL
  - lob:Other
---
# I_TRANSPORTATIONMODECATEGORYT

**Transportationmodecategoryt**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationModeCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tor_trmod_cat preserving type)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `TransportationModeCategoryDesc` |  | |  | `cast ( ddtext as /scmtms/vdm_tor_trmod_cat_desc preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Language` | | ✓ | | |
| `_TransportationModeCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText:   {label:              'Transportation Mode Category - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:     'TransportationModeCategory',
                 dataCategory:          #TEXT,
                 usageType:             {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #META},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'ITRMODECATTEXT'
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:       {ignorePropagatedAnnotations: true}

define view entity I_TransportationModeCategoryT
  as select from dd07t
  association        to parent I_TransportationModeCategory as _TransportationModeCategory on $projection.TransportationModeCategory = _TransportationModeCategory.TransportationModeCategory
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationModeCategory'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tor_trmod_cat preserving type) as TransportationModeCategory,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                     as Language,
      @Semantics.text
      cast ( ddtext  as /scmtms/vdm_tor_trmod_cat_desc preserving type )             as TransportationModeCategoryDesc,

      @Consumption.hidden: true
      @Analytics.hidden: true
      domvalue_l                                                                     as DomainValue,

      /* Associations */
      _TransportationModeCategory,
      _Language
}
where
      domname  = '/SAPAPO/TRMODCAT'
  and as4local = 'A';
```
