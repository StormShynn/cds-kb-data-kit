---
name: I_TRANSPORTATIONMODECATEGORYT
description: "Transportationmodecategoryt"
app_component: TM-MD-TN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationModeCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tor_trmod_cat preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TransportationModeCategoryDesc` |  | |  | `cast ( ddtext as /scmtms/vdm_tor_trmod_cat_desc preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TransportationModeCategory` | | ✓ | | | | |

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
