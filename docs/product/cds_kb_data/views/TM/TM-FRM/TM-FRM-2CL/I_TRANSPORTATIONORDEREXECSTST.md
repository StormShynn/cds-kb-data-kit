---
name: I_TRANSPORTATIONORDEREXECSTST
description: "Transp Order Execution Status - Text"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTST')/$value
semantic_en: "Transp Order Execution Status - Text"
semantic_vi: "I_TRANSPORTATIONORDEREXECSTST — CDS view cơ bản dựa trên dd07t."
keywords:
  - "transportationorderexecstst"
  - "transportation"
  - "order"
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
# I_TRANSPORTATIONORDEREXECSTST

**Transp Order Execution Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderExecSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type)` | `CHAR(2)` | Execution Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TransportationOrderExecStsDesc` |  | |  | `cast(ddtext as /scmtms/vdm_tor_exe_sts_desc preserving type)` | `CHAR(60)` | Transportation Order Execution Status Description |
| `_TransportationOrderExecSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrderExecSts` | `I_TransportationOrderExecSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTST')/$value)*

```abap
@EndUserText:   {label:              'Transp Order Execution Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:     'TransportationOrderExecSts',
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
@Analytics.technicalName: 'IEXECSTATUSTEXT'
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TransportationOrderExecStsT
  as select from dd07t
  association [0..1] to I_TransportationOrderExecSts as _TransportationOrderExecSts on $projection.TransportationOrderExecSts = _TransportationOrderExecSts.TransportationOrderExecSts
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationOrderExecSts'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type) as TransportationOrderExecSts,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                        as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_tor_exe_sts_desc preserving type)                      as TransportationOrderExecStsDesc,

      /* Associations */
      _TransportationOrderExecSts,
      _Language
}
where
      domname  = '/SCMTMS/TOR_EXECUTION_STATUS'
  and as4local = 'A';
```
