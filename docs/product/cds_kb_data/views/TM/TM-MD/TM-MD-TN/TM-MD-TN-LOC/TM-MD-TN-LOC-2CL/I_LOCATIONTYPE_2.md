---
name: I_LOCATIONTYPE_2
description: "Locationtype 2"
app_component: TM-MD-TN-LOC-2CL
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
  - component:TM-MD-TN-LOC-2CL
  - lob:Other
---
# I_LOCATIONTYPE_2

**Locationtype 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-LOC-2CL` |
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
| `LocationType` | ✓ | |  | `cast(domvalue_l as /sapapo/c_loctype)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Location Types'
@Analytics.dataCategory: #DIMENSION
//optional
//@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'LocationType'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'LocationType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
//optional
//                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_LocationType_2
  as select from dd07l
  composition [0..*] of I_LocationTypeText_2 as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as /sapapo/c_loctype) as LocationType,

       @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                      as DomainValue,

      /* Associations */
      _Text
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
