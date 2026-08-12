---
name: I_MNTMBLAPPINBTRANSREQTYPETEXT
description: "Mobile Inbound Trans Request Type - Text"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPINBTRANSREQTYPETEXT')/$value
semantic_en: "Mobile Inbound Trans Request Type - Text"
semantic_vi: "Mobile Inbound Trans Request Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "mobile"
  - "inbound"
  - "trans"
  - "request"
  - "type"
  - "text"
  - "language"
  - "maint"
  - "appl"
  - "name"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MNTMBLAPPINBTRANSREQTYPETEXT

**Mobile Inbound Trans Request Type - Text**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPINBTRANSREQTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `MaintMblApplInbTransReqType` | ✓ | |  | `cast( domvalue_l as /smfnd/ibq_trans_req_typ_dte )` | `CHAR(1)` | Inbound Transaction: Requesting Type |
| `MntMblAppInbTransReqTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPINBTRANSREQTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPINBTRANSREQTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IMNTMBLAPPINBTRANSREQTYPETXT'

@EndUserText.label: 'Mobile Inbound Trans Request Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  }
}

@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_MntMblAppInbTransReqTypeText
  as select from dd07t

  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type )        as Language,

      @ObjectModel.text.element: ['MntMblAppInbTransReqTypeName']
  key cast( domvalue_l as /smfnd/ibq_trans_req_typ_dte ) as MaintMblApplInbTransReqType,

      @Semantics.text: true
      ddtext                                             as MntMblAppInbTransReqTypeName,

      _Language
}
where
      domname  = '/SMFND/IBQ_TRAN_REQ_TYPE'
  and as4local = 'A'
  and as4vers  = '0000'
```
