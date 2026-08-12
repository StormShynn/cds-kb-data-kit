---
name: I_USERSETTINGSFORCOMPANYCODE
description: "This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity."
semantic_vi: "Company Code User Default Value — CDS view giao diện dựa trên P_UserSettingsForCompanyCode."
keywords:
  - "company"
  - "code"
  - "user"
  - "default"
  - "value"
  - "business"
tags:
  - FI
  - bo:plant
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_USERSETTINGSFORCOMPANYCODE

**This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessUser` | ✓ | |  |  | `CHAR(12)` | User ID |
| `CompanyCode` |  | |  |  | `CHAR(40)` | Parameter value |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIUSRSTTNGCC'
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Company Code User Default Value'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'BusinessUser',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #MASTER,
                modelingPattern: #DERIVATION_FUNCTION,
                supportedCapabilities: [#DERIVATION_FUNCTION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions:true}

define view I_UserSettingsForCompanyCode
  as select from P_UserSettingsForCompanyCode
{

  key BusinessUser,

      P_UserSettingsForCompanyCode.CompanyCode as CompanyCode

}

where
  BusinessUser = $session.user
```
