---
name: I_SUPLRFRTINVCREQCRTNTYPET
description: "Supplier Freight Inv Req Crea Type - Txt"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPET')/$value
semantic_en: "Supplier Freight Inv Req Crea Type - Txt"
semantic_vi: "I_SUPLRFRTINVCREQCRTNTYPET — CDS view cơ bản dựa trên dd07t."
keywords:
  - "suplrfrtinvcreqcrtntypet"
  - "suplr"
  - "invc"
  - "creation"
  - "type"
  - "language"
  - "crtn"
  - "desc"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQCRTNTYPET

**Supplier Freight Inv Req Crea Type - Txt**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqCreationType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_creation_type preserving type)` | `CHAR(2)` | Freight Settlement Document Creation Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SuplrFrtInvcReqCrtnTypeDesc` |  | |  | `cast(ddtext as /scmtms/vdm_sfir_crtn_type_des preserving type)` | `CHAR(60)` | Freight Settlement Document Creation Type Description |
| `_SuplrFrtInvcReqCrtnType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrFrtInvcReqCrtnType` | `I_SuplrFrtInvcReqCrtnType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPET')/$value)*

```abap
@EndUserText:   {label:              'Supplier Freight Inv Req Crea Type - Txt'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'SuplrFrtInvcReqCreationType',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
//                                         #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:   #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqCrtnTypeT_2'}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_SuplrFrtInvcReqCrtnTypeT
  as select from dd07t
  association [0..1] to I_SuplrFrtInvcReqCrtnType  as _SuplrFrtInvcReqCrtnType  on $projection.SuplrFrtInvcReqCreationType = _SuplrFrtInvcReqCrtnType.SuplrFrtInvcReqCreationType
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SuplrFrtInvcReqCrtnType'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_creation_type preserving type)    as SuplrFrtInvcReqCreationType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                             as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_sfir_crtn_type_des preserving type)                         as SuplrFrtInvcReqCrtnTypeDesc,

      /* Associations */
      _SuplrFrtInvcReqCrtnType,
      _Language
}
where
      domname  = '/SCMTMS/SFIR_CREATE_TYPE'
  and as4local = 'A';
```
