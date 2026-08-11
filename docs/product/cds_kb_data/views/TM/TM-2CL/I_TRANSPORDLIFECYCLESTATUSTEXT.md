---
name: I_TRANSPORDLIFECYCLESTATUSTEXT
description: "Transp Order Life Cycle Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUSTEXT')/$value
semantic_en: "Transp Order Life Cycle Status - Text"
semantic_vi: "I_TRANSPORDLIFECYCLESTATUSTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transpordlifecyclestatustext"
  - "transp"
  - "life"
  - "cycle"
  - "status"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDLIFECYCLESTATUSTEXT

**Transp Order Life Cycle Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdLifeCycleStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_lc_status preserving type)` | `CHAR(2)` | Life Cycle Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TranspOrdLifeCycleStatusDesc` |  | |  | `cast(ddtext as /scmtms/vdm_tor_lc_status_desc preserving type )` | `CHAR(60)` | Transportation Order Life Cycle Status Description |
| `_TranspOrdLifeCycleStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdLifeCycleStatus` | `I_TranspOrdLifeCycleStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDLIFECYCLESTATUSTEXT')/$value)*

```abap
@EndUserText:   {label:                    'Transp Order Life Cycle Status - Text'}
@Analytics:     {dataExtraction:           {enabled: true},
                 internalName:             #LOCAL}
@ObjectModel:   {representativeKey:        'TranspOrdLifeCycleStatus',
                 dataCategory:             #TEXT,
                 usageType:                {serviceQuality: #A,
                                            sizeCategory:   #S,
                                            dataClass:      #CUSTOMIZING},
                 modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:                 #BASIC}
@AbapCatalog:   {compiler:                 {compareFilter: true},
                 sqlViewName:              'ITORLIFECYCSTST',
                 preserveKey:               true}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_TranspOrdLifeCycleStatusText

  as select from dd07t
  association [0..1] to I_TranspOrdLifeCycleStatus as _TranspOrdLifeCycleStatus on $projection.TranspOrdLifeCycleStatus = _TranspOrdLifeCycleStatus.TranspOrdLifeCycleStatus
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdLifeCycleStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_lc_status preserving type) as TranspOrdLifeCycleStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_tor_lc_status_desc preserving type )            as TranspOrdLifeCycleStatusDesc,

      /* Associations */
      _TranspOrdLifeCycleStatus,
      _Language
}
where
      domname  = '/SCMTMS/TOR_LC_STATUS'
  and as4local = 'A';
```
