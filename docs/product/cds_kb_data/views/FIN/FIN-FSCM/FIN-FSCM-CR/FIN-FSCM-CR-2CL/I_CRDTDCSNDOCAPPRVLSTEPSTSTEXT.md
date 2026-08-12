---
name: I_CRDTDCSNDOCAPPRVLSTEPSTSTEXT
description: "Approval Step Status - Text"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSTEXT')/$value
semantic_en: "Approval Step Status - Text"
semantic_vi: "I_CRDTDCSNDOCAPPRVLSTEPSTSTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "crdtdcsndocapprvlstepststext"
  - "credit"
  - "decision"
  - "apprvl"
  - "status"
  - "language"
  - "name"
tags:
  - FIN
  - bo:project
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CRDTDCSNDOCAPPRVLSTEPSTSTEXT

**Approval Step Status - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocApprvlStatus` | ✓ | |  | `cast( domvalue_l as ukm_dcd_approval_status )` | `CHAR(1)` | Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CreditDecisionDocApprvlStsName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_ApprovalStepStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ApprovalStepStatus` | `I_CrdtDcsnDocApprvlStepStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCAPPRVLSTEPSTSTEXT')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IDCDAPSTTXT',
                compiler: { compareFilter: true },
                buffering: { status: #ACTIVE,
                             type: #FULL } }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText: { label: 'Approval Step Status - Text' }
@VDM: { viewType:  #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #META },
                dataCategory: #TEXT,
                semanticKey: [ 'CreditDecisionDocApprvlStatus' ],
                supportedCapabilities:[#LANGUAGE_DEPENDENT_TEXT],
                representativeKey: 'CreditDecisionDocApprvlStatus' }
define view I_CrdtDcsnDocApprvlStepStsText
  as select from dd07t

  // VDM Associations
  // Parent
  association [0..1] to I_CrdtDcsnDocApprvlStepStatus as _ApprovalStepStatus on $projection.CreditDecisionDocApprvlStatus = _ApprovalStepStatus.CreditDecisionDocApprvlStatus

  // Language
  association [0..1] to I_Language                    as _Language           on $projection.Language = _Language.Language

{
       // VDM Fields
       @ObjectModel: { foreignKey: { association: '_ApprovalStepStatus' },
                       text: { element: [ 'CreditDecisionDocApprvlStsName' ] } }
  key  cast( domvalue_l as ukm_dcd_approval_status ) as CreditDecisionDocApprvlStatus,

       @Semantics: { language: true }
       @ObjectModel: { foreignKey: { association: '_Language' } }
  key  ddlanguage                                    as Language,

       @Semantics: { text: true }
       ddtext                                        as CreditDecisionDocApprvlStsName,

       // Exposed Associations
       _ApprovalStepStatus,
       _Language

}

where
  domname = 'UKM_DCD_APPROVAL_STATUS'
```
