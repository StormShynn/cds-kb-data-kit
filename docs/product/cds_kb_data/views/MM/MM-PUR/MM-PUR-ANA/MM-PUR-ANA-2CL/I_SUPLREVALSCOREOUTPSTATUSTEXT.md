---
name: I_SUPLREVALSCOREOUTPSTATUSTEXT
description: "Suplrevalscoreoutpstatustext"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - text-view
  - text
  - status
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALSCOREOUTPSTATUSTEXT

**Suplrevalscoreoutpstatustext**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `SuplrEvalScoreOutputStatus` | ✓ | |  | `cast( domvalue_l as mmpur_ana_de_se_output_status)` |  |  |
| `SuplrEvalScoreOutputStatusText` |  | |  | `cast(ddtext as mmpur_ana_de_se_outp_status_t)` |  |  |
| `_Language` | | ✓ | | | | |
| `_OutputStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SuplrEvalScoreOutputStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@AbapCatalog.sqlViewName: 'IMMSESOTPTSTST'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'SE Score Output Status - Text'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_SuplrEvalScoreOutpStatusText
  as select from dd07t

  association to parent I_SuplrEvalScoreOutputStatus as _OutputStatus on $projection.SuplrEvalScoreOutputStatus = _OutputStatus.SuplrEvalScoreOutputStatus

  association [0..1] to I_Language                   as _Language     on $projection.Language = _Language.Language
{
 
       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  cast( ddlanguage as spras preserving type )          as Language,

       @ObjectModel.text.element: ['SuplrEvalScoreOutputStatusText']
  key  cast( domvalue_l   as mmpur_ana_de_se_output_status) as SuplrEvalScoreOutputStatus,

       @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
       @Semantics.text: true
       cast(ddtext    as mmpur_ana_de_se_outp_status_t)     as SuplrEvalScoreOutputStatusText,
       _OutputStatus,
       _Language
}
where
      domname  = 'MMPUR_ANA_DM_SE_OUTPUT_STATUS'
  and as4local = 'A'
  and as4vers  = '0000'
```
