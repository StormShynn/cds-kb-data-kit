---
name: I_DOCUMENTINFORECORDSTRUCSTS
description: "Documentinforecordstrucsts"
app_component: CA-DMS
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
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDSTRUCSTS

**Documentinforecordstrucsts**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
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
| `IsDocInfoRecordStructure` | ✓ | |  | `substring( Domval.domvalue_l, 1, 1 )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordStrucStsT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCSTRUCSTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'IsDocInfoRecordStructure'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #META }
@EndUserText.label: 'Document Info Record Structure Status'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_DocumentInfoRecordStrucSts
  as select from dd07l as Domval

  association [0..*] to I_DocumentInfoRecordStrucStsT as _Text on $projection.IsDocInfoRecordStructure = _Text.IsDocInfoRecordStructure

{  
      @ObjectModel.text.association: '_Text'
      @Semantics.booleanIndicator:true
  key substring( Domval.domvalue_l, 1, 1 ) as  IsDocInfoRecordStructure,
    @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      //Associations
      _Text            
}
where
      Domval.domname  = 'CV_VDM_DOC_STRUCTURE'
  and Domval.as4local = 'A'
```
