---
name: I_TRANSPAGREEMENTTYPETEXT
description: "Transpagreementtypetext"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - text-view
  - text
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPAGREEMENTTYPETEXT

**Transpagreementtypetext**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationAgreementType` | ✓ | |  | `cast( fagtypeid103 as /scmtms/vdm_fag_type_code preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TranspAgreementTypeText` |  | |  | `cast( description as vdm_fag_type_desc preserving type )` |  |  |
| `_TranspAgreementType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspAgreementType` | `I_TranspAgreementType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ITFAGTYPT'
@EndUserText:   {label:              'Transportation Agreement Type - Text'}
@Metadata:       {ignorePropagatedAnnotations: true}
@ObjectModel:   {representativeKey:     'TransportationAgreementType',
                 dataCategory:          #TEXT,
                 usageType:             {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspAgreementTypeText
  as select from /scmtms/c_faty_t
  association [0..1] to I_TranspAgreementType as _TranspAgreementType on $projection.TransportationAgreementType = _TranspAgreementType.TransportationAgreementType
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspAgreementType'
  key cast( fagtypeid103 as /scmtms/vdm_fag_type_code preserving type ) as TransportationAgreementType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                             as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( description as vdm_fag_type_desc preserving type )          as TranspAgreementTypeText,

      /*Associations*/
      _TranspAgreementType,
      _Language

}
```
