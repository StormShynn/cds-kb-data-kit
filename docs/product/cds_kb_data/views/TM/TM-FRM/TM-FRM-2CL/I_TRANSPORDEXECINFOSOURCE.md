---
name: I_TRANSPORDEXECINFOSOURCE
description: "Transportation Order Execution Info Source"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCE')/$value
semantic_en: "Transportation Order Execution Info Source"
semantic_vi: "Transportation Order Execution Info Source — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transportation"
  - "order"
  - "execution"
  - "info"
  - "source"
  - "transp"
  - "exec"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# I_TRANSPORDEXECINFOSOURCE

**Transportation Order Execution Info Source**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdExecInfoSource` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/execinfo_source preserving type)` | `CHAR(1)` | Source of Execution Information |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdExecInfoSourceText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCE')/$value)*

```abap
@EndUserText.label: 'Transportation Order Execution Info Source'

@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdExecInfoSource',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY],
                 sapObjectNodeType.name: 'TranspOrdExecInformationSource'
                }                                      
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IEXECINFOSRC',
                 buffering:          {status: #SWITCHED_OFF},
                 preserveKey:true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}


define view I_TranspOrdExecInfoSource
  as select from dd07l

  association [0..*] to I_TranspOrdExecInfoSourceText as _Text on $projection.TranspOrdExecInfoSource = _Text.TranspOrdExecInfoSource
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/execinfo_source preserving type) as TranspOrdExecInfoSource,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/EXECINFO_SOURCE'
  and as4local = 'A';
```
