---
name: I_SUPLRFRTINVCREQTYPETEXT
description: "Supplier Freight Invoice Request Type - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPETEXT')/$value
semantic_en: "Supplier Freight Invoice Request Type - Text"
semantic_vi: "I_SUPLRFRTINVCREQTYPETEXT — CDS view cơ bản dựa trên I_SUPLRFRTINVCREQTYPETEXT."
keywords:
  - "suplrfrtinvcreqtypetext"
  - "suplr"
  - "invc"
  - "type"
  - "language"
  - "desc"
tags:
  - TM
  - bo:billingdocument
  - component:TM-2CL
  - interface-view
  - invoice
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQTYPETEXT

**Supplier Freight Invoice Request Type - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqType` | ✓ | |  | `type` | `CHAR(4)` | Type |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `SuplrFrtInvcReqTypeDesc` |  | |  | `cast(description_s as /scmtms/vdm_sfir_type_desc preserving type)` | `CHAR(40)` | Freight Settlement Document Type Description |
| `_SuplrFrtInvcReqType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrFrtInvcReqType` | `I_SuplrFrtInvcReqType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPETEXT')/$value)*

```abap
@EndUserText:   {label:              'Supplier Freight Invoice Request Type - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'SuplrFrtInvcReqType',
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
@VDM:           {viewType:            #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqTypeText_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ISFIRTYPETEXT',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:       {ignorePropagatedAnnotations: true}

define view I_SuplrFrtInvcReqTypeText
  as select from /scmtms/c_sfirtt
  association [0..1] to I_SuplrFrtInvcReqType as _SuplrFrtInvcReqType on $projection.SuplrFrtInvcReqType = _SuplrFrtInvcReqType.SuplrFrtInvcReqType
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SuplrFrtInvcReqType'
  key type                                                              as SuplrFrtInvcReqType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                             as Language,
      @Semantics.text
      cast(description_s as /scmtms/vdm_sfir_type_desc preserving type) as SuplrFrtInvcReqTypeDesc,

      /* Associations */
      _SuplrFrtInvcReqType,
      _Language
}
```
