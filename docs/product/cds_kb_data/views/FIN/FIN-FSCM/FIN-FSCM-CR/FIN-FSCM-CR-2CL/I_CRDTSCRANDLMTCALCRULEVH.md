---
name: I_CRDTSCRANDLMTCALCRULEVH
description: "This CDS view is designed to provide a value help for calculation rules related to credit scores and credit limits. It serves as a basic view that can be used to search and retrieve specific calculation rules by their names, which are used in determining credit scores and limits. This CDS view provides the data to answer the following business questions: What are the available calculation rules for determining credit scores and limits? How can I search for a specific credit score and limit calculation rule by its name? What is the description or text associated with a particular credit score and limit calculation rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTSCRANDLMTCALCRULEVH')/$value
semantic_en: "This CDS view is designed to provide a value help for calculation rules related to credit scores and credit limits. It serves as a basic view that can be used to search and retrieve specific calculation rules by their names, which are used in determining credit scores and limits. This CDS view provides the data to answer the following business questions: What are the available calculation rules for determining credit scores and limits? How can I search for a specific credit score and limit calculation rule by its name? What is the description or text associated with a particular credit score and limit calculation rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CRDTSCRANDLMTCALCRULEVH

**This CDS view is designed to provide a value help for calculation rules related to credit scores and credit limits. It serves as a basic view that can be used to search and retrieve specific calculation rules by their names, which are used in determining credit scores and limits. This CDS view provides the data to answer the following business questions: What are the available calculation rules for determining credit scores and limits? How can I search for a specific credit score and limit calculation rule by its name? What is the description or text associated with a particular credit score and limit calculation rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTSCRANDLMTCALCRULEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditScoreAndLimitCalcRule` |  | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
