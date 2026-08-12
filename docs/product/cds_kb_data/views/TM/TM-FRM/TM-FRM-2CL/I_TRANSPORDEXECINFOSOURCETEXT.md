---
name: I_TRANSPORDEXECINFOSOURCETEXT
description: "Transportation Order Execution Info Source - Text"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCETEXT')/$value
semantic_en: "Transportation Order Execution Info Source - Text"
semantic_vi: "Transportation Order Execution Info Source - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transportation"
  - "order"
  - "execution"
  - "info"
  - "source"
  - "text"
  - "transp"
  - "exec"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# I_TRANSPORDEXECINFOSOURCETEXT

**Transportation Order Execution Info Source - Text**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdExecInfoSource` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/execinfo_source preserving type)` | `CHAR(1)` | Source of Execution Information |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ExecInfoSourceDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_TranspOrdExecInfoSource` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdExecInfoSource` | `I_TranspOrdExecInfoSource` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCETEXT')/$value)*

```abap
@EndUserText.label: 'Transportation Order Execution Info Source - Text'
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdExecInfoSource',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IEXECINFOSRCTXT',
                 preserveKey:         true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdExecInfoSourceText
  as select from dd07t

  association [0..1] to I_TranspOrdExecInfoSource as _TranspOrdExecInfoSource on $projection.TranspOrdExecInfoSource = _TranspOrdExecInfoSource.TranspOrdExecInfoSource
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdExecInfoSource'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/execinfo_source preserving type) as TranspOrdExecInfoSource,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                   as Language,
      @Semantics.text
      ddtext                                                                       as ExecInfoSourceDesc,

      /* Associations */
      _TranspOrdExecInfoSource,
      _Language

}
where
      domname  = '/SCMTMS/EXECINFO_SOURCE'
  and as4local = 'A';
```
