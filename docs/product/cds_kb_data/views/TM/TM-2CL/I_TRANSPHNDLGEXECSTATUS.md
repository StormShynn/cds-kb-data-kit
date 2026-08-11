---
name: I_TRANSPHNDLGEXECSTATUS
description: "Transportation Handling Execution Status"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUS')/$value
semantic_en: "Transportation Handling Execution Status"
semantic_vi: "I_TRANSPHNDLGEXECSTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transphndlgexecstatus"
  - "transp"
  - "stop"
  - "hndlg"
  - "exec"
  - "status"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_TRANSPHNDLGEXECSTATUS

**Transportation Handling Execution Status**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopHndlgExecStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_s_hdl_exec_status preserving type)` | `CHAR(2)` | Handling Execution Status at Stop Level |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspHndlgExecStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPHNDLGEXECSTATUS')/$value)*

```abap
@EndUserText:   {label:              'Transportation Handling Execution Status'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ITRHDLEXECST'
@ObjectModel:   {representativeKey:  'TranspOrdStopHndlgExecStatus',
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
                 sapObjectNodeType.name: 'TranspOrdStopHndlgExecStatus'
                }
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:       {allowExtensions:   true,
                 ignorePropagatedAnnotations: true}

define view entity I_TranspHndlgExecStatus
as select from dd07l
association[0..*] to I_TranspHndlgExecStatusText as _Text on $projection.TranspOrdStopHndlgExecStatus = _Text.TranspOrdStopHndlgExecStatus 
{
    @ObjectModel.text.association: '_Text'
key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_s_hdl_exec_status preserving type) as TranspOrdStopHndlgExecStatus,
    
    /* Associations */
    _Text
}
where domname  = '/SCMTMS/TOR_S_HDL_EXEC_STATUS'
and as4local = 'A';
```
